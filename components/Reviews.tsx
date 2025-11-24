import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 w-[400px] flex-shrink-0 backdrop-blur-sm hover:bg-zinc-800 transition-colors">
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} className="text-orange-500 fill-orange-500" />
      ))}
    </div>
    <p className="text-zinc-300 text-lg mb-6 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-3">
       <div className="w-10 h-10 rounded-full bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">
          {author.charAt(0)}
       </div>
       <div>
          <div className="text-sm font-bold text-white">{author}</div>
          <div className="text-xs text-zinc-500">{role}</div>
       </div>
    </div>
  </div>
);

const Reviews: React.FC = () => {
  const reviews = [
    {
      quote: "Finally, a system that doesn't feel like it was built in the 90s. It's fast, beautiful, and my staff actually enjoy using it.",
      author: "James C.",
      role: "Owner, The Salt Room"
    },
    {
      quote: "We saved over £400 in cover fees in our first month alone. switching to Tabley was a no-brainer for us.",
      author: "Sarah M.",
      role: "GM, Pasta Loco"
    },
    {
      quote: "The no-show protection is magic. We used to have 3-4 empty tables a night, now it's zero. It pays for itself.",
      author: "David K.",
      role: "Head Chef, OAK"
    },
    {
      quote: "Customer support is incredible. I had a question about the widget and they fixed it within 5 minutes via chat.",
      author: "Elena R.",
      role: "Owner, Pintxo"
    },
    {
      quote: "I love that I own my data. I can download my customer list and email them directly without paying extra.",
      author: "Marcus T.",
      role: "Manager, The Green Bird"
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 overflow-hidden relative">
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't just take our word for it.</h2>
                <p className="text-zinc-400 text-lg max-w-xl">
                  Join hundreds of independent venues taking back control of their bookings.
                </p>
             </div>
             <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                <Star size={16} className="fill-emerald-500" />
                <span className="text-sm font-bold">Rated 4.9/5 by Restaurateurs</span>
             </div>
          </div>
       </div>

       {/* Carousel Container */}
       <div className="relative w-full group">
           {/* Fade Gradients */}
           <div className="absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none"></div>
           <div className="absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none"></div>

           {/* Track */}
           <div className="flex overflow-hidden">
             {/* Track 1 */}
             <div className="flex shrink-0 animate-scroll gap-6 min-w-full pr-6 group-hover:[animation-play-state:paused]">
                {reviews.map((review, idx) => (
                   <ReviewCard key={`r1-${idx}`} {...review} />
                ))}
             </div>
             {/* Track 2 (Duplicate) */}
             <div className="flex shrink-0 animate-scroll gap-6 min-w-full pr-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
                {reviews.map((review, idx) => (
                   <ReviewCard key={`r2-${idx}`} {...review} />
                ))}
             </div>
           </div>
       </div>
    </section>
  );
};

export default Reviews;