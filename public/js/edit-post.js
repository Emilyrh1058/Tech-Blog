async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('textarea[name="post-title"]').value.trim();
  const body = document.querySelector('textarea[name="post-text"]').value.trim();
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          body
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log(response);
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);