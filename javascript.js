const SocialMediaLinks = {
  github: 'mrdaniel77',
  facebook: 'DANIEL.M',
  instagram: 'DANIEL.M',
  youtube: 'DANIEL.M',
  linkedin: 'in/daniel-monteiro-a6182a216'
}

function showSocialMediaLinks() {
  for (let t of socialLinks.children) {
    const social = t.getAttribute('class')

    t.children[0].href = `https://www.${social}.com/${SocialMediaLinks[social]}`
  }
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
