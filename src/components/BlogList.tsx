import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogDetail from "@/components/BlogDetail";

const BlogList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // If /blogs/:id, show detail view
  const blogId = location.pathname.startsWith("/blogs/") ? location.pathname.split("/blogs/")[1] : null;

  useEffect(() => {
    axios
      .get("https://public-api.wordpress.com/wp/v2/sites/kuvaira.wordpress.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Failed to fetch posts:", err))
      .finally(() => setLoading(false));
  }, []);

  // Inline BlogDetail if blogId is present
  if (blogId) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <section className="pt-40 py-20 flex-1">
          <BlogDetail id={blogId} onBack={() => navigate("/blogs")} />
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-40 py-20 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-black text-left">
            Our Blogs
          </h1>
          <p className="text-lg text-muted-foreground mb-12 text-left max-w-2xl">
            Explore our latest articles, insights, and updates from Kuvaira.
          </p>
          {loading && <div className="text-center">Loading...</div>}
          {!loading && posts.length === 0 && (
            <div className="text-center">No blog posts found.</div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <button
                key={post.id}
                onClick={() => navigate(`/blogs/${post.id}`)}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col overflow-hidden text-left"
                style={{ padding: 0, border: "none", background: "none" }}
              >
                {post.jetpack_featured_media_url && (
                  <img
                    src={post.jetpack_featured_media_url}
                    alt={post.title.rendered}
                    className="h-56 w-full object-cover"
                  />
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title.rendered}
                  </h2>
                  <div
                    className="text-gray-700 text-sm mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <span className="mt-auto text-primary font-medium group-hover:underline">
                    Read More →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogList;
