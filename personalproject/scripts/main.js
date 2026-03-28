const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

const finderForm = document.querySelector("#finderForm");
const resultTitle = document.querySelector("#resultTitle");
const resultPrice = document.querySelector("#resultPrice");
const resultDescription = document.querySelector("#resultDescription");

const contactForm = document.querySelector("#contactForm");
const formSuccess = document.querySelector("#formSuccess");

const packages = [
  {
    name: "Starter",
    price: 299,
    homeTypes: ["apartment", "house"],
    priorities: ["convenience"],
    description: "A simple starting point for smaller spaces and everyday convenience."
  },
  {
    name: "Security",
    price: 699,
    homeTypes: ["apartment", "house", "large-home"],
    priorities: ["security"],
    description: "A strong choice for people focused on safety, access control, and monitoring."
  },
  {
    name: "Premium",
    price: 1199,
    homeTypes: ["house", "large-home"],
    priorities: ["automation", "security"],
    description: "A complete smart home setup with advanced automation, security, and device integration."
  }
];

function toggleMenu() {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function displayRecommendation(pkg) {
  if (!resultTitle || !resultPrice || !resultDescription) {
    return;
  }

  resultTitle.textContent = pkg.name;
  resultPrice.textContent = `Estimated starting price: $${pkg.price}`;
  resultDescription.textContent = pkg.description;
}

function updateRecommendation(homeType, priority) {
  const matches = packages.filter((pkg) => {
    return pkg.homeTypes.includes(homeType) && pkg.priorities.includes(priority);
  });

  let recommendedPackage;

  if (matches.length > 0) {
    recommendedPackage = matches[0];
  } else if (homeType === "large-home") {
    recommendedPackage = packages.find((pkg) => pkg.name === "Premium");
  } else if (priority === "security") {
    recommendedPackage = packages.find((pkg) => pkg.name === "Security");
  } else {
    recommendedPackage = packages.find((pkg) => pkg.name === "Starter");
  }

  displayRecommendation(recommendedPackage);
}

function getSuggestedPackage(interest, homeType) {
  if (interest === "security" || interest === "cameras") {
    return "Security";
  } else if (interest === "full" || homeType === "large-home") {
    return "Premium";
  } else {
    return "Starter";
  }
}

function buildContactSubmission(name, email, homeType, interest, message) {
  return {
    name,
    email,
    homeType,
    interest,
    message,
    suggestedPackage: getSuggestedPackage(interest, homeType)
  };
}

function handleContactFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const homeTypeInput = document.querySelector("#homeType");
  const interestInput = document.querySelector("#interest");
  const messageInput = document.querySelector("#message");

  const submission = buildContactSubmission(
    nameInput.value.trim(),
    emailInput.value.trim(),
    homeTypeInput.value,
    interestInput.value,
    messageInput.value.trim()
  );

  console.log("Contact form submission:", submission);

  if (submission.name === "" || submission.email === "") {
    if (formSuccess) {
      formSuccess.hidden = false;
      formSuccess.textContent = "Please enter your name and email before submitting.";
    }
    return;
  }

  if (formSuccess) {
    formSuccess.hidden = false;
    formSuccess.textContent = `✅ Thanks, ${submission.name}! Based on your answers, the ${submission.suggestedPackage} package may be a good fit. We’ll get back to you soon.`;
  }

  contactForm.reset();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", toggleMenu);
}

if (finderForm) {
  finderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const homeType = document.querySelector("#homeType").value;
    const priority = document.querySelector("#priority").value;

    updateRecommendation(homeType, priority);
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", handleContactFormSubmit);
}