const SocialMediaLinks = {
  github: 'mrdaniel77',
  linkedin: 'in/daniel-monteiro-a6182a216'
}

function showSocialMediaLinks() {
  let t = socialLinks
  const social = t.getAttribute('class')

  t.children[2].href = `https://www.${social}.com/${SocialMediaLinks[social]}`
}

function getGit() {
  const url = 'https://api.github.com/users/mrdaniel77'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userLink.href = data.html_url
      userName.textContent = data.login
    })
}

showSocialMediaLinks()
getGit()



function showNumber() {
  alert("  Olá, meu número é: \n   61 99363-7364");
}

function showEmail() {
  alert("Olá, logo abaixo está meu email :) \n    tecnicodaniel077@gmail.com"
  );
}
