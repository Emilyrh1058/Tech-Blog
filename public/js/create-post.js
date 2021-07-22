async function postHandler(event) {
  event.preventDefault();

  const title = document.querySelector('textarea[name="post-title"]').value.trim();
  const post_text = document.querySelector('textarea[name="post-text"]').value.trim();

  const response = await fetch('/api/posts', {
      method: 'post',
      body: JSON.stringify({
          title,
          post_text
      }),
      headers: {
          'Content-Type': 'application/json'           
      }
  });

  if (response.ok) {
      document.location.replace('/dashboard');
      console.log(title, post_text);
  } else {
      alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', postHandler);