let isEnglish = false;

  function showSection(id)
  {
    // Hide all sections
    document.querySelectorAll('section').forEach((section) =>
    {
      section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(id).style.display = 'block';
  }

  function toggleTheme()
  {
    var body = document.body;
    var themeButton = document.querySelector('.icon-switch button');
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    if (body.classList.contains("dark-mode"))
    {
      themeButton.innerHTML = "<img height=\"16\" src=\"contents/images/light.png\">";
    }
    else
    {
      themeButton.innerHTML = "<img height=\"16\" src=\"contents/images/dark.png\">";
    }
  }

  function toggleLanguage()
  {
    debugger;
    let nowEn = new Date();
    let nowFa = nowEn.toLocaleDateString('fa-IR');
    let yearEn = nowEn.getFullYear();
    let yearFa = nowFa.substring(0, 4);
    let birthDateEn = new Date(1988, 8, 19);
    let birthDateFa = birthDateEn.toLocaleDateString('fa-IR');
    let age = calculateAge(birthDateEn);
    const title = document.getElementById("title");
    const myName = document.getElementById("myName");
    const MyDes = document.getElementById("MyDes");
    const home = document.getElementById("home");
    const homeMenu = document.getElementById("homeMenu");
    const homeMyName = document.getElementById("homeMyName");
    const homeMyExpertise = document.getElementById("homeMyExpertise");
    const homeMyProgrammingLanguage = document.getElementById("homeMyProgrammingLanguage");
    const homeMyEducation = document.getElementById("homeMyEducation");
    const homeMyAge = document.getElementById("homeMyAge");
    const homeMySocial = document.getElementById("homeMySocial");
    const homeMyResomePdf = document.getElementById("homeMyResomePdf");
    const resumeMenu = document.getElementById("resumeMenu");
    const resumeName = document.getElementById("resumeName");
    const resumeValue = document.getElementById("resumeValue");
    const contactMenu = document.getElementById("contactMenu");
    const contactDiv = document.getElementById("contactDiv");
    const yourEmail = document.getElementById("YourEmail");
    const yourMessage = document.getElementById("YourMessage");
    const sendEmail = document.getElementById("SendEmail");
    const footer = document.getElementById("footer");
    const githubPages = document.getElementById("githubPages");
    const githubPagesLink = "<a href=\"https://pages.github.com\" target =\"_blank\">*</a>"; //target	_blank //"https://pages.github.com";
    const siteMap = document.getElementById("siteMap");
    var languageSwitch = document.getElementById('LanguageSwitch');

    var leftToRight = "ltr";
    var rightToLeft = "rtl"

    if (isEnglish)
    {
      home.style.direction = leftToRight;
      myName.textContent = "H Movaghari"
      title.textContent = myName.textContent;
      MyDes.textContent = "Programmer & Backend Web Developer";
      homeMenu.textContent = "Home";
      homeMyName.textContent = "Name : ";
      homeMyExpertise.textContent = "Expertise : ";
      homeMyProgrammingLanguage.textContent = "Programming Languages : ";
      homeMyEducation.textContent = "Education : PhD in computer software engineering from Babol Islamic Azad University";
      homeMyAge.textContent = "Born : " + birthDateEn.getFullYear() + "/" + birthDateEn.getMonth().toString() + "/" + birthDateEn.getDate() + " (" + age + " years old)";
      homeMySocial.textContent = "Social Networks : ";
      homeMyResomePdf.textContent = "Resume : ";
      resumeMenu.textContent = "Resume"
      resumeName.style.direction = leftToRight;
      resumeValue.textContent = "Detail your professional experience, skills, and achievements. You can also link to a downloadable PDF of your resume.";
      resumeValue.style.direction = leftToRight;
      contactMenu.textContent = "Contac";
      contactDiv.style.direction = leftToRight;
      yourEmail.textContent = "Email";
      yourMessage.textContent = "Message";
      sendEmail.textContent = "Send";
      footer.textContent = "© " + yearEn + " " + myName.textContent + " - ";
      footer.style.direction = leftToRight;
      githubPages.innerHTML = "Hosted on " + githubPagesLink.replace("*", "Github Pages") + " - "; //<a href=\"" + githubPagesUrl + "\">Github Pages</a>";
      siteMap.textContent = "SiteMap";
      siteMap.style.direction = leftToRight;
      languageSwitch.innerHTML = "<img height=\"16\" src=\"contents/images/fa.png\">";
    }
    else
    {
      home.style.direction = rightToLeft;
      myName.textContent = "ح موقری";
      title.textContent = myName.textContent;
      MyDes.textContent = "برنامه نویس و توسعه دهنده وب سمت سرور";
      homeMenu.textContent = "خانه";
      homeMyName.textContent = "نام : ";
      homeMyExpertise.textContent = "تخصص : ";
      homeMyProgrammingLanguage.textContent = "زبان های برنامه نویسی : ";
      homeMyEducation.textContent = "تحصیلات : دکتری مهندسی کامپیوتر نرم افزار از دانشگاه آزاد اسلامی بابل ";
      homeMyAge.textContent = "متولد : " + birthDateFa + " (" + convertEnNumberToPersian(age) + " ساله)";
      homeMySocial.textContent = "شبکه های اجتماعی : ";
      homeMyResomePdf.textContent = "رزومه : ";
      resumeMenu.textContent = "رزومه";
      resumeName.style.direction = rightToLeft;
      resumeValue.textContent = "تجربه، مهارت ها و دستاوردهای حرفه ای خود را به تفصیل شرح دهید. همچنین می توانید به یک PDF قابل دانلود رزومه خود پیوند دهید.";
      resumeValue.style.direction = rightToLeft;
      contactMenu.textContent = "تماس";
      contactDiv.style.direction = rightToLeft;
      yourEmail.textContent = "ایمیل";
      yourMessage.textContent = "پیام";
      sendEmail.textContent = "ارسال";
      footer.textContent = "© " + yearFa + " " + myName.textContent + " - ";
      footer.style.direction = rightToLeft;
      githubPages.innerHTML = "میزبانی شده توسط " + githubPagesLink.replace("*", "صفحات گیت هاب") + " - ";
      siteMap.textContent = "نقشه سایت";
      siteMap.style.direction = rightToLeft;
      languageSwitch.innerHTML = "<img height=\"16\" src=\"contents/images/en.png\">";
    }
    homeMyName.textContent += myName.textContent;
    homeMyExpertise.textContent += MyDes.textContent;
    homeMyProgrammingLanguage.innerHTML += "<img height=\"16\" src=\"contents/images/csharp.png\" title=\"Csharp C#\">, <img height=\"16\" src=\"contents/images/html.png\" title=\"HTML\">, <img height=\"16\" src=\"contents/images/css.png\" title=\"CSS\">, <img height=\"16\" src=\"contents/images/javascript.png\" title=\"javascript js\">";
    resumeName.textContent = resumeMenu.textContent;
    isEnglish = !isEnglish;
  }

  function showPageWithLanguage(page, language)
  {
    showSection(page);
    isEnglish = language == 'en';
    toggleLanguage(language);
  }

  function calculateAge(birthDate)
  {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
}

function convertEnNumberToPersian(number)
{
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.toString().split('').map(function(e) {
      return persianNumbers[+e] || e;
  }).join('');
}

window.onload = function()
{
    checkHash();
};

window.onhashchange = function()
{
    checkHash();
};

function checkHash()
{
  // Get from URL (default is home)
  var element = window.location.href.split("#")[1];
  if (typeof element == 'undefined')
  {
    element = 'home:en';
  }
  var parameters = element.split(":");
  var page = parameters[0];
  var language = parameters[1];
  if (typeof language == 'undefined')
  {
    language = 'en';
  }
  showPageWithLanguage(page, language);
  var ceo = document.getElementsByClassName("ceo");
  for (var index = 0; index < ceo.length; index++)
  {
    var title = ceo[index].getAttribute("title") + " H Movaghari (ح موقری) (hmovaghari)";
    ceo[index].setAttribute("title", title);
    if (ceo[index].localName == "img")
    {
      ceo[index].setAttribute("alt", title);
    }
  }
}
