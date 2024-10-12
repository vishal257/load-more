export default async function getData(page:number, query:string, max:number) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${page}&maxResults=${max}&key=${process.env.NEXT_PUBLIC_API_KEY}`
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
    let image = item.volumeInfo.imageLinks?.thumbnail || 'https://www.bookdeal.com/images/no-image.png';
    let description = item.volumeInfo.description || 'No Description Available!';
    let link = item.volumeInfo.infoLink;

    data.push({title:title, image:image, description:description, link:link});
  }

  return data;
}
