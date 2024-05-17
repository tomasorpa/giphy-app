export const GifGrid = ({category}) => {
     const getGif = async () => {
         const apiKey = "iq81VxxgOg4laIVemQZKBNs2PXK3gEug"
         const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&q=${category}&limit=20`
         const resp = await fetch(url)
         const {data}= await resp.json()
         const gifs = data.map(gif => ({
             id:gif.id,
             url: gif.images.original.url,
             title:gif.title
         }))
       
     }
     getGif()
    
    return (
        <>
            <h3>{category}</h3>
                  
        </>
    )
}