import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {  
    const blog = useLoaderData()
    const {cover_image, title, description, published_at, url, tags, body_html
    } = blog;
    console.log(blog)

    return (
        <div   className=" transition border-2 border-opacity-30 p-2  mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    {
                        tags.map(tag =><a key={tag.id} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                    }                  

                </div>
                
				<div className=" space-y-2">
					<a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
					
					{/* <p>{description}</p> */}
				</div>
			</div>
    );
};

export default Content;