const rules = [
  {
    title: "Règle 1",
    text: "Votre mot de passe doit contenir au moins 5 caractères.",
    validate: (password) => password.length >= 5,
    content: null,
  },
  {
    title: "Règle 2",
    text: "Votre mot de passe doit inclure un chiffre.",
    validate: (password) => /\d/.test(password),
    content: null,
  },
  {
    title: "Règle 3",
    text: "Votre mot de passe doit contenir une lettre majuscule.",
    validate: (password) => /[A-Z]/.test(password),
    content: null,
  },
  {
    title: "Règle 4",
    text: "Votre mot de passe doit inclure un caractère spécial.",
    validate: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
    content: null,
  },
  {
    title: "Règle 5",
    text: "Les chiffres de votre mot de passe doivent totaliser 25.",
    validate: (password) => {
      const digits = password.match(/\d/g);
      if (!digits) return false;
      const sum = digits.reduce((acc, curr) => acc + parseInt(curr), 0);
      return sum === 25;
    },
    content: null,
  },
  {
    title: "Règle 6",
    text: "Votre mot de passe doit inclure un mois de l'année.",
    validate: (password) =>
      /(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i.test(
        password
      ),
    content: null,
  },
  {
    title: "Règle 7",
    text: "Votre mot de passe doit inclure un de nos sponsors : Simplon, Veolia ou Xavier",
    validate: (password) => /(Simplon|Xavier|Veolia)/i.test(password),
    content: "src/img/sponsors.webp",
  },
  {
    title: "Règle 8",
    text: "Votre mot de passe doit inclure un chiffre romain.",
    validate: (password) => /[IVXLCDM]/.test(password),
    content: null,
  },
  {
    title: "Règle 9",
    text: "Les chiffres romains de votre mot de passe doivent s'additionner pour donner 35.",
    validate: (password) => {
      const romanToNumber = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };

      const romanDigits = password.match(/[IVXLCDM]/g);
      if (!romanDigits) return false;

      const sum = romanDigits.reduce(
        (acc, digit) => acc + romanToNumber[digit],
        0
      );

      return sum === 35;
    },
    content: null,
  },
  {
    title: "Règle 10",
    text: "Votre mot de passe doit inclure la date du jour.",
    validate: (password) => {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = String(currentDate.getFullYear()).slice(2);
      const formattedDate = `${day}/${month}/${year}`;

      return password.includes(formattedDate);
    },
    content: null,
  },
  {
    title: "Règle 11",
    text: "Les éléments de votre mot de passe doivent avoir des numéros atomiques dont la somme est égale à 200.",
    validate: (password) => {
      const elementNumbers = {
        H: 1,
        He: 2,
        Li: 3,
        Be: 4,
        B: 5,
        C: 6,
        N: 7,
        O: 8,
        F: 9,
        Ne: 10,
        Na: 11,
        Mg: 12,
        Al: 13,
        Si: 14,
        P: 15,
        S: 16,
        Cl: 17,
        Ar: 18,
        K: 19,
        Ca: 20,
        Sc: 21,
        Ti: 22,
        V: 23,
        Cr: 24,
        Mn: 25,
        Fe: 26,
        Co: 27,
        Ni: 28,
        Cu: 29,
        Zn: 30,
        Ga: 31,
        Ge: 32,
        As: 33,
        Se: 34,
        Br: 35,
        Kr: 36,
        Rb: 37,
        Sr: 38,
        Y: 39,
        Zr: 40,
        Nb: 41,
        Mo: 42,
        Tc: 43,
        Ru: 44,
        Rh: 45,
        Pd: 46,
        Ag: 47,
        Cd: 48,
        In: 49,
        Sn: 50,
        Sb: 51,
        I: 53,
        Xe: 54,
        Cs: 55,
        Ba: 56,
        La: 57,
        Ce: 58,
        Pr: 59,
        Nd: 60,
        Pm: 61,
        Sm: 62,
        Eu: 63,
        Gd: 64,
        Tb: 65,
        Dy: 66,
        Ho: 67,
        Er: 68,
        Tm: 69,
        Yb: 70,
        Lu: 71,
        Hf: 72,
        Ta: 73,
        W: 74,
        Re: 75,
        Os: 76,
        Ir: 77,
        Pt: 78,
        Au: 79,
        Hg: 80,
        Tl: 81,
        Pb: 82,
        Bi: 83,
        Po: 84,
        At: 85,
        Rn: 86,
        Fr: 87,
        Ra: 88,
        Ac: 89,
        Th: 90,
        Pa: 91,
        U: 92,
        Np: 93,
        Pu: 94,
        Am: 95,
        Cm: 96,
        Bk: 97,
        Cf: 98,
        Es: 99,
        Fm: 100,
      };

      const sortedElements = Object.keys(elementNumbers).sort(
        (a, b) => b.length - a.length
      );

      const elementRegex = new RegExp(sortedElements.join("|"), "g");

      const elements = password.match(elementRegex);

      if (!elements) return false;

      const sum = elements.reduce(
        (acc, element) => acc + elementNumbers[element],
        0
      );

      return sum === 200;
    },
    content: null,
  },
  {
    title: "Règle 12",
    text: "Votre mot de passe doit inclure le nom d'un pays existant.",
    validate: (password) => {
      const countries = [
        "Afghanistan",
        "Albanie",
        "Algérie",
        "Andorre",
        "Angola",
        "Antigua-et-Barbuda",
        "Argentine",
        "Arménie",
        "Australie",
        "Autriche",
        "Azerbaïdjan",
        "Bahamas",
        "Bahreïn",
        "Bangladesh",
        "Barbade",
        "Biélorussie",
        "Belgique",
        "Belize",
        "Bénin",
        "Bhoutan",
        "Bolivie",
        "Bosnie-Herzégovine",
        "Botswana",
        "Brésil",
        "Brunei",
        "Bulgarie",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodge",
        "Cameroun",
        "Canada",
        "République centrafricaine",
        "Tchad",
        "Chili",
        "Chine",
        "Colombie",
        "Comores",
        "Congo",
        "République démocratique du Congo",
        "Costa Rica",
        "Croatie",
        "Cuba",
        "Chypre",
        "République tchèque",
        "Danemark",
        "Djibouti",
        "Dominique",
        "République dominicaine",
        "Équateur",
        "Égypte",
        "El Salvador",
        "Guinée équatoriale",
        "Érythrée",
        "Estonie",
        "Eswatini",
        "Éthiopie",
        "Fidji",
        "Finlande",
        "France",
        "Gabon",
        "Gambie",
        "Géorgie",
        "Allemagne",
        "Ghana",
        "Grèce",
        "Grenade",
        "Guatemala",
        "Guinée",
        "Guinée-Bissau",
        "Guyana",
        "Haïti",
        "Honduras",
        "Hongrie",
        "Islande",
        "Inde",
        "Indonésie",
        "Iran",
        "Irak",
        "Irlande",
        "Israël",
        "Italie",
        "Jamaïque",
        "Japon",
        "Jordanie",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Corée du Nord",
        "Corée du Sud",
        "Koweït",
        "Kirghizistan",
        "Laos",
        "Lettonie",
        "Liban",
        "Lesotho",
        "Libéria",
        "Libye",
        "Liechtenstein",
        "Lituanie",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaisie",
        "Maldives",
        "Mali",
        "Malte",
        "Îles Marshall",
        "Mauritanie",
        "Maurice",
        "Mexique",
        "Micronésie",
        "Moldavie",
        "Monaco",
        "Mongolie",
        "Monténégro",
        "Maroc",
        "Mozambique",
        "Myanmar",
        "Namibie",
        "Nauru",
        "Népal",
        "Pays-Bas",
        "Nouvelle-Zélande",
        "Nicaragua",
        "Niger",
        "Nigéria",
        "Macédoine du Nord",
        "Norvège",
        "Oman",
        "Pakistan",
        "Palaos",
        "Panama",
        "Papouasie-Nouvelle-Guinée",
        "Paraguay",
        "Pérou",
        "Philippines",
        "Pologne",
        "Portugal",
        "Qatar",
        "Roumanie",
        "Russie",
        "Rwanda",
        "Saint-Christophe-et-Niévès",
        "Sainte-Lucie",
        "Saint-Vincent-et-les-Grenadines",
        "Samoa",
        "Saint-Marin",
        "Sao Tomé-et-Principe",
        "Arabie saoudite",
        "Sénégal",
        "Serbie",
        "Seychelles",
        "Sierra Leone",
        "Singapour",
        "Slovaquie",
        "Slovénie",
        "Îles Salomon",
        "Somalie",
        "Afrique du Sud",
        "Soudan du Sud",
        "Espagne",
        "Sri Lanka",
        "Soudan",
        "Suriname",
        "Suède",
        "Suisse",
        "Syrie",
        "Taïwan",
        "Tadjikistan",
        "Tanzanie",
        "Thaïlande",
        "Timor oriental",
        "Togo",
        "Tonga",
        "Trinité-et-Tobago",
        "Tunisie",
        "Turquie",
        "Turkménistan",
        "Tuvalu",
        "Ouganda",
        "Ukraine",
        "Émirats arabes unis",
        "Royaume-Uni",
        "États-Unis",
        "Uruguay",
        "Ouzbékistan",
        "Vanuatu",
        "Vatican",
        "Venezuela",
        "Viêt Nam",
        "Yémen",
        "Zambie",
        "Zimbabwe",
      ];

      return countries.some((country) => password.includes(country));
    },
    content: null,
  },
  {
    title: "Règle 13",
    text: "Résolvez le captcha :",
    validate: (password) => password.includes("gf9wxX1"),
    content: "src/img/captcha.webp",
  },
  {
    title: "Règle 14",
    text: "Réécrivez le mot de passe que vous avez saisi.",
    validate: (password, secondPassword) => password === secondPassword,
    content: null,
  },
];

const passwordInput = document.getElementById("password");
const secondPasswordInput = document.getElementById("second-password");
const rulesContainer = document.getElementById("rules");
const secondPasswordSection = document.getElementById(
  "second-password-section"
);
const finalMessage = document.getElementById("final-message");

let activeRuleIndex = -1;

function renderRules() {
  rulesContainer.innerHTML = "";

  rules.forEach((rule, index) => {
    if (index <= activeRuleIndex) {
      rule.isVisible = true;
    }
  });

  const visibleRules = rules.filter((rule) => rule.isVisible);
  visibleRules.sort((a, b) => {
    const aIsValid = a.validate(
      passwordInput.value,
      secondPasswordInput ? secondPasswordInput.value : ""
    );
    const bIsValid = b.validate(
      passwordInput.value,
      secondPasswordInput ? secondPasswordInput.value : ""
    );

    return aIsValid - bIsValid;
  });

  visibleRules.forEach((rule) => {
    const isValid = rule.validate(
      passwordInput.value,
      secondPasswordInput ? secondPasswordInput.value : ""
    );

    const ruleDiv = document.createElement("div");
    ruleDiv.className = "rule " + (isValid ? "valid" : "invalid");

    const title = document.createElement("h2");
    title.textContent = rule.title;
    ruleDiv.appendChild(title);

    const content = document.createElement("div");
    content.className = "rule-content";

    const text = document.createElement("p");
    text.textContent = rule.text;
    content.appendChild(text);

    if (rule.content) {
      const img = document.createElement("img");
      img.src = rule.content;
      img.alt = "Captcha Image";
      img.style.width = "100%";
      img.style.marginTop = "10px";
      img.style.borderRadius = "8px";
      content.appendChild(img);
    }

    ruleDiv.appendChild(content);
    rulesContainer.appendChild(ruleDiv);
  });
}

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;

  let currentRulesValid = true;
  for (let i = 0; i <= activeRuleIndex; i++) {
    if (
      !rules[i].validate(
        password,
        secondPasswordInput ? secondPasswordInput.value : ""
      )
    ) {
      currentRulesValid = false;
      activeRuleIndex = i;
      break;
    }
  }

  if (currentRulesValid) {
    if (activeRuleIndex < rules.length - 1) {
      activeRuleIndex++;

      while (
        activeRuleIndex < rules.length - 1 &&
        rules[activeRuleIndex].validate(
          password,
          secondPasswordInput ? secondPasswordInput.value : ""
        )
      ) {
        activeRuleIndex++;
      }
    }
  }

  if (activeRuleIndex === 13) {
    passwordInput.type = "password";
    secondPasswordSection.style.display = "flex";
  }

  renderRules();
});

secondPasswordInput.addEventListener("input", () => {
  if (passwordInput.value === secondPasswordInput.value) {
    finalMessage.style.display = "flex";
  }
});

renderRules();
