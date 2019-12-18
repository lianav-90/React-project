import React from 'react'

function BloggerCard({bloggers}) {
    return (
        <div>
            {bloggers.map(blogger => {
            return (
                <div className="card" key={blogger.id}>
                    <div className="card-body">
                        <h5 className="card-title">{blogger.lastname}</h5>
                    </div>
                </div>
            )
        })
        }
        </div>
        
    )
}

export default BloggerCard
