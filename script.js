function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const image = document.getElementById("image").files[0];
    const video = document.getElementById("video").files[0];

    const blogPosts = document.getElementById("blogPosts");

    const postDiv = document.createElement("div");
    postDiv.classList.add("blog-post");

    const postTitle = document.createElement("h3");
    postTitle.textContent = title;
    const postContent = document.createElement("p");
    postContent.textContent = content;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);

    if (image) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(image);
        postDiv.appendChild(img);
    }

    if (video) {
        const videoElement = document.createElement("video");
        videoElement.setAttribute("controls", "controls");
        videoElement.src = URL.createObjectURL(video);
        postDiv.appendChild(videoElement);
    }

    blogPosts.appendChild(postDiv);

    document.getElementById("postForm").reset();
}
