const postElement = document.getElementById('posts');

const getQueryString = (e) => {
    if (e !== undefined) {
      console.log(e.target)
      console.log(e.target.name)
      console.log(e.target.value)
      return `/?${e.target.name}=${e.target.value}`;
    }
  
    return ""
  }
  
  
  // async function fetchPosts() {} // Hosting - JS moved this code automatically to the top
  // rewrite the above code with async/await and try/catch
  const fetchPosts = async (e) => {
    try {
      const response =  await fetch('http://localhost:3000/posts' + getQueryString(e))
      // console.log(response)
      // if (!response.ok) {
      //   throw new Error('API is down')
      // }
      const data =  await response.json()
    
      console.log('This will not be shown if an error occurs with the fetch, as long as errorhandling is not implemented')
    
      postElement.innerHTML = data.map((post) => `
        <div>
          <p>
            <span class="date"><i>${post.created_at}</i></span>
            <span>${post.content}</span>
            <span><a href="post.html?id=${post.id}">View</a></span>
          <p>
        </div>`
      ).join('')
    } catch (error) {
      postElement.innerHTML = "Opps something when wrong. Please try again later!"
      console.log(error)
    }
  }
  
  fetchPosts();
  
  console.log('This will execute before all other console.logs. Thats because the Fetch is an asynchronous operation')