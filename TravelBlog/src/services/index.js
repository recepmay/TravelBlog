
export const getBlogPosts = () =>
    fetch(`https://my-json-server.typicode.com/recepmay/blogposts/blogPosts`)
        .then(response => response.json())
        .then(body => {
            if (!body.error) {
                return body;
            }
            if (body.error) {
                console.log(body.message, 2);
                return null;
            }
            console.log("Something went wrong while fetching blog posts!", 2);
            return null;
        });

export const saveBlogPost = async createdPost =>
    fetch(`https://my-json-server.typicode.com/recepmay/blogposts/blogPosts`,
        {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: createdPost.id,
                date: createdPost.date,
                image: createdPost.image,
                categories: createdPost.categories,
                title: createdPost.title,
                content: createdPost.content
            }),
        }
    )
        .then(response => {
            //alert("Blog Post saved.", 2);
            return response.json();
        })
        .then(body => {
            if (!body.error) {
                return body;
            }
            if (body.error) {
                alert("Blog Post couldn't be saved.", 2);
                return null;
            }
            alert("Blog Post couldn't be saved.", 2);
            return null;
        });

export const deleteBlogPost = async postId =>
    fetch(
        `https://my-json-server.typicode.com/recepmay/blogposts/blogPosts/${postId}`,
        {
            method: 'DELETE',
        }
    )
        .then(response => response.json())
        .then(body => {
            if (!body.error) {
                return body;
            }
            if (body.error) {
                alert("Blog Post couldn't be deleted.", 2);
                return null;
            }
            alert("Blog Post couldn't be deleted.", 2);
            return null;
        });

export const uploadImage = async file => {

    const data = new FormData();
    data.append('file', file);

    fetch(`http://localhost:4000/upload`,
        {
        method: 'POST',
        body: data,
        mode: 'no-cors'
}
    )
        .then(response => {
            //alert("Blog Post saved.", 2);
            return response;
        })
        .then(body => {
            if (!body.error) {
                return body;
            }
            if (body.error) {
                alert("Blog Post couldn't be saved.", 2);
                return null;
            }
            alert("Blog Post couldn't be saved.", 2);
            return null;
        });
};
