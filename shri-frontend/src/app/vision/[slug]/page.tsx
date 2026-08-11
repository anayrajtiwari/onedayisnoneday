import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.meta.title,
      description: post.meta.description || "Articles, manifestos, and vision notes from SHRI.",
      alternates: {
        canonical: `https://shri.org.in/vision/${slug}`,
      },
      openGraph: {
        title: `${post.meta.title} | SHRI Vision`,
        description: post.meta.description || "Articles and manifestos from SHRI.",
        type: "article",
        url: `https://shri.org.in/vision/${slug}`,
        publishedTime: post.meta.date,
      },
      twitter: {
        card: "summary_large_image",
        title: post.meta.title,
        description: post.meta.description,
      },
    };
  } catch {
    return {
      title: "Vision Article",
    };
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://shri.org.in/vision/${slug}#article`,
        "headline": post.meta.title,
        "description": post.meta.description || "Articles and manifestos from SHRI.",
        "datePublished": post.meta.date,
        "dateModified": post.meta.date,
        "mainEntityOfPage": `https://shri.org.in/vision/${slug}`,
        "author": {
          "@type": "Person",
          "@id": "https://anay.shri.org.in/#person",
          "name": "Anay Raj Tiwari",
          "url": "https://anay.shri.org.in"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://shri.org.in/#organization",
          "name": "SHRI",
          "url": "https://shri.org.in"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://shri.org.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Vision",
            "item": "https://shri.org.in/vision"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.meta.title,
            "item": `https://shri.org.in/vision/${slug}`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-shri-black text-shri-offwhite">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
