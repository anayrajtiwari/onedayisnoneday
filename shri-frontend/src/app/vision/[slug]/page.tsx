import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-8 pt-40 pb-20">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6 uppercase">
            {post.meta.title}
          </h1>
          <p className="text-shri-gold/60 tracking-[0.3em] uppercase text-xs">
            {post.meta.date}
          </p>
          <div className="w-24 h-[1px] bg-shri-gold mt-8"></div>
        </header>

        <div className="prose prose-invert prose-shri max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <Footer />
    </main>
  );
}
