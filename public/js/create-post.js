async function postHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('textarea[name="post-title"]')
    .value.trim();
  const body = document
    .querySelector('textarea[name="post-text"]')
    .value.trim();

  const response = await fetch("/api/posts", {
    method: "post",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    console.log(title, body);
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".new-post-form").addEventListener("submit", postHandler);
