

export default () => ({

    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores sapiente enim nobis dolorem, ad molestiae impedit saepe! Nemo odit eum numquam. Distinctio, vel pariatur officia cumque consequuntur dignissimos vitae natus!',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem accusantium doloremque laudantium',
            picture: null
        },
        {
            id: new Date().getTime() + 3000,
            date: new Date().toDateString(),
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae',
            picture: null
        },
    ]
})