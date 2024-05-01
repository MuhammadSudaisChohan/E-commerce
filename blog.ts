export default {
    name:'blog',
    type:'document',
    title:'Blog',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title of blog'
        },
        {
            name:'slug',
            type:'slug',
            title:'slug of blog'
        },
        {
            name:'titleImage',
            type:'image',
            title:'Title Image'
        },
        {
            name:'smalldescription',
            type:'text',
            title:'SmallDescription'
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {
                    type:'block'
                }
            ]

        },
    ]

}