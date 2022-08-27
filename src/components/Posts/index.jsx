import PostCard from '../PostCard/index'
import './styles.css'

const Posts = ({posts}) => (
    <div className='posts'>
    {posts.map((post) => (
      <PostCard
        key={post.id}
        id={post.id}
        body={post.body}
        title={post.title}
        cover={post.cover}
      />
    ))}
  </div>
)

export default Posts