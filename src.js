// async function getUsers() {
//     const loading = document.querySelector("#loading");
//     const error = document.querySelector("#error");
//     const usersContainer = document.querySelector("#users");

//     // սկզբնական վիճակ
//     loading.style.display = "block";
//     error.textContent = "";
//     usersContainer.innerHTML = "";

//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//             throw new Error("Something went wrong");
//         }

//         const data = await response.json();

//         data.forEach(user => {
//             usersContainer.innerHTML += `
//                 <div>
//                     <h3>${user.name}</h3>
//                     <p>${user.email}</p>
//                 </div>
//             `;
//         });

//     } catch (err) {
//         error.textContent = "Error: " + err.message;

//     } finally {
//         loading.style.display = "none";
//     }
// }

// getUsers();


////////////////////////////////
//  const promise = new Promise((resolve,reject)=>{
//     const success = true   ;

//     if(success){
//         resolve("Data received");
//     }else{
//         reject("Something went wrong");
//     }
//  });
//     promise.then((result) => {
//         console.log(result);
//     });

//     promise.catch((result)=>{
//         console.log(error)
//     });

//     promise.finally((result)=>{
//         console.log("Finished")
//     });

/////////////////////////////////////////////

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Loading finished")
// })

///////////////////////////////////
//  const input = document.querySelector("#input");
//  const btn = document.querySelector("#btn");
//  const load = document.querySelector("#loading");
//  const err = document.querySelector("#error");
//  const result = document.querySelector("#result");

//  btn.addEventListener("click", ()=>{
//     const searchName = input.value.trim()

//     load.textContent="Loading..";

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         const user = data.find(user=> user.name===searchName);
    
//     if (!user) {
//         throw new Error("User not found");
//     }
    
//     result.innerHTML=`<p>${user.name}</p><p>${user.email}</p><p>${user.phone}</p>`;
//    })

//     .catch((error) => {
//         err.textContent = error.message;
//     })

//     .finally(()=>{
//         load.textContent=""
//     })

//  })

/////////////////////////
// const usersPromise =
//     fetch("https://jsonplaceholder.typicode.com/users");

// const postsPromise =
//     fetch("https://jsonplaceholder.typicode.com/posts");

// const productsPromise =
//     fetch("https://dummyjson.com/products");


//     Promise.all([
//         usersPromise,
//         postsPromise,
//         productsPromise
//     ])

//     .then((results)=>{
//         console.log(results)
//     })

    ////////ays 3 requestnery sksum en miajamanak, u spasum amenaerkarin
    ////////u ete gone meky lini rejact uremn kgna catch u theny chi ashxati


// const p1 = Promise.resolve("User data");
// const p2 = Promise.resolve("Posts data");
// const p3 = Promise.resolve("Products data");

// Promise.all([
//     p1,
//     p2,
//     p3
// ])

// .then((results)=>{
//     console.log(results)
// })


// const p1 = Promise.resolve("User data");
// const p2 = Promise.reject("Posts error");
// const p3 = Promise.resolve("Products data");

// Promise.allSettled([
//     p1,
//     p2,
//     p3
// ])

// .then((results)=>{
//     console.log(results)
// })



// const p1 = new Promise(resolve => {
//     setTimeout(() => resolve("User data"), 3000);
// });

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("Posts data"), 1000);
// });

// const p3 = new Promise(resolve => {
//     setTimeout(() => resolve("Products data"), 2000);
// });

// Promise.race([
//     p1,
//     p2,
//     p3
// ])

// .then((results)=>{
//     console.log(results)
// })

// const p1 = Promise.reject("Server 1 error");

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("Server 2 data"), 1000);
// });

// const p3 = new Promise(resolve => {
//     setTimeout(() => resolve("Server 3 data"), 2000);
// });

// Promise.any([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     });

//////////////////////////////////////

const user = fetch("https://jsonplaceholder.typicode.com/users")
const posts = fetch("https://jsonplaceholder.typicode.com/posts")
const todos = fetch("https://jsonplaceholder.typicode.com/todos")

Promise.all([
    user.then((response)=>{
        return response.json();
    }),
    posts.then((response)=>{
        return response.json();
    }),
    todos.then((response)=>{
        return response.json();
    })
])
.then((result) => {
    console.log(result);
});