
- This assignment is about using the React library to create a Travel Blog.

- All the photos that has been used in this project has been taken by me during my travels.
No copyright issues! :)

- Folder size is not optimal due to the high resolution photograph that has been used.

- Project folder can be accessed via : git@github.com:recepmay/TravelBlog.git

- Project only includes view part of the application. However I created a backend.js 
file using Node.js in order to handle image upload process while creating a new blog
post. In order to run backend service please go to: \TravelBlog and run "node backend.js"

- Use "node backend.js". Backend service will be running using portnumber 4000 and upload requests will be sent to 
this service. Uploaded images will be stored in \TravelBlog\public\images

- I tried to access a local file stored in \Constants\blogEntries.json with Node.js again
but I faced CORS problems and didn't want to use any workaround solutions since it would be
risky and I wouldn't have a chance to know that if it will be working properly in your 
environment. So, I created a db.json file in GitHub after seeing your referral in the pdf file.
All the entries can be seen and accessed via:

https://my-json-server.typicode.com/recepmay/blogposts/blogPosts

- All the GET, POST and DELETE requests are being operated using this endpoint. However, I 
couldn't managed to update the actual JSON file stored in GitHub. It may be how GitHub works
while it comes to these requests. Since I didn't have much time to dive into it, I let it be 
that way. This is why you won't be able to see the view will be updated after creating or 
deleting a post using the interface. But if you check the Network panel in the browser you 
can see that creation-deletion operations are done successfully and services are working fine.

- Also I am always behind my company's proxy since I am using my office laptop to work on this 
assignment. This is why sometimes I am having problems to access, download and upload to
some certain endpoints. It can be troubling thus I decided not to focus on it in order not to 
lose time.

- And since GitHub won't allow me to request a file which includes more than 10000 chars, I 
couldn't create more entries to populate my view. Any other backend service can be used to
fetch formatted data to populate the view if desired.

- I tried to use different contents in different languages to make it a bit easy to make content
based search in the home page.
