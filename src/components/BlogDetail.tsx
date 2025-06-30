import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

interface BlogDetailProps {
  id?: string;
  onBack?: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ id, onBack }) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(`https://public-api.wordpress.com/wp/v2/sites/kuvaira.wordpress.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-4 py-10 text-center">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <p>Blog post not found.</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          onClick={onBack}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <button
        className="flex items-center mb-6 text-primary hover:underline"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2" size={20} /> Back to Blogs
      </button>
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {post.jetpack_featured_media_url && (
          <img
            src={post.jetpack_featured_media_url}
            alt={post.title.rendered}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
