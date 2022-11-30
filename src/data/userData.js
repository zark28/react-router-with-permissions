import {nanoid} from 'nanoid'
export const userData={
   users:[
    { id:nanoid(),
        name:'john doe',
        email:'johndoe@example.com',
        role:{

            _id:nanoid(),
            name:'admin',
        }
          },
          { id:nanoid(),
            name:'john woe',
            email:'johnwoe@example.com',
            role:{
    
                _id:nanoid(),
                name:'content creator',
                permissions:[
                    'content',
                    'categories',
                    'organisation'
                    ]
            }
              },
              { id:nanoid(),
                name:'john eoe',
                email:'johneoe@example.com',
                role:{
        
                    _id:nanoid(),
                    name:'content creator',
                    permissions:[
                        'content',
                        
                        ]
                }
                  },
                  { id:nanoid(),
                    name:'john zoe',
                    email:'johnzoe@example.com',
                    role:{
            
                        _id:nanoid(),
                        name:'content creator',
                        permissions:[
                            'content',
                            
                            'organisation'
                            ]
                    }
                      },
]
}