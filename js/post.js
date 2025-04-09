console.log(window.location)
console.log(window.location.search)
let params = new URLSearchParams(window.location.search);
let id = params.get("id"); 
console.log(id)

const postElement = document.getElementById('post')
console.log(postElement);

const fetchPostById = async (e) => {
  try {
    const response =  await fetch('http://localhost:3000/posts/' + id)
    // console.log(response)
    // if (!response.ok) {
    //   throw new Error('API is down')
    // }
    const post =  await response.json()
    console.log(post);
  
    postElement.innerHTML = `
      <div>
        <p>
          <span class="date"><i>${post.created_at}</i></span>
          <span>${post.content}</span>
          <p>
          <span><a href="index.html">Back</a></span>
      </div>`
  } catch (error) {
    postElement.innerHTML = "Opps something when wrong. Please try again later!"
    console.log(error)
  }
}

fetchPostById();