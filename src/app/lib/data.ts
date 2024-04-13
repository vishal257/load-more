export default async function getData() {
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=quilting&startIndex=0&maxResults=1');
    const response = await res.json();
    const data = [];
    for(const item in response.items){
        let title = item.volumeInfo.title;
        let image = item.volumeInfo.imageLinks.thumbnail;
        let description = item.volumeInfo.description;
        let link = item.volumeInfo.infoLink;
    }
    console.log(response);
}