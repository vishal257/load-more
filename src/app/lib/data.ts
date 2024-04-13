export default async function getData(page:number) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=quilting&startIndex=${page}&maxResults=6`
  );
  const response = await res.json();
  const data = [];

  interface Item {
    volumeInfo: {
      title: string,
      imageLinks: {
        thumbnail:string
      },
      description:string,
      infoLink:string
    };
  }

  const items:Item[] = response.items;

  for (const item of items) {
    let title = item.volumeInfo.title;
    let image = item.volumeInfo.imageLinks.thumbnail;
    let description = item.volumeInfo.description;
    let link = item.volumeInfo.infoLink;

    data.push({title:title, image:image, description:description, link:link});
  }

  return data;
}
