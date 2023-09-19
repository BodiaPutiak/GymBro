import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import blogPosts from './blogPosts';

function Blog() {
    return (
        <>
            <div className="banner">
                <h2>Blog</h2>
            </div>

            <div className="blog-page-container">
                <section className="main-section">
                    {blogPosts.map((post) => {
                        return (
                            <div key={post.id} className="blog-post">
                                <img src={post.image} alt="" />
                                <p>By Admin | {post.date} | {post.sport}</p>
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                                <button className="primary-button">PURCHASE NOW</button>
                            </div>  
                        )
                    })}
                </section>
                <section className="side-section">
                    <form action="">
                        <input type="text" placeholder='Search...'/>
                        <button type='submit'>
                            <FontAwesomeIcon icon={faSearch} color='#fff' />
                        </button>
                    </form>
                    <div className="categories-container">
                        <h2 className='underlined-header'>Categories</h2>
                        <ul>
                            <li><p>Body Building</p> <span>(4)</span></li>
                            <li><p>Boxing</p> <span>(4)</span></li>
                            <li><p>Crossfit</p> <span>(4)</span></li>
                            <li><p>Fintess</p> <span>(4)</span></li>
                            <li><p>Cardio</p> <span>(4)</span></li>
                            <li><p>Yoga</p> <span>(4)</span></li>
                        </ul>
                    </div>
                    <div className="recent-posts">
                        <h2 className='underlined-header'>Recent Posts</h2>
                        <ul>
                            {blogPosts.map((post) => {
                                return (
                                    <li key={post.id}>
                                        <div className="img-cont">
                                            <img src={post.image} alt="" />
                                        </div>
                                        <div>
                                            <p>{post.date}</p>
                                            <h3>{post.title}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Blog;