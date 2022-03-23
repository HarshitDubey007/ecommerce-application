import React from 'react'
import Layout from '../../components/Layouts'

export default function Home() {
    return (
        <Layout>
            <div style={{margin: '5rem', background: '#fff'}} className='jumbotron text-center'>
                <h1> welcome to Admin Dashboard</h1>
                <p>
                    
React-admin injects a few props to the create and edit views: the resource name, the basePath (the root URL), the permissions , and, in the case of the edit view, the record id . That's why you need to pass the props to the Create and Edit components.
                </p>
            </div>     
        </Layout>
    )
}
