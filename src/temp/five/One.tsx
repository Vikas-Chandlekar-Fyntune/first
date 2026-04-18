import { useRef, useEffect } from "react";

const arr = Array.from({ length: 10 }, (_, i) => i + 1);

export default function One() {
  const parentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = parentRef.current;
    const header = headerRef.current;
    const content = contentRef.current;

    if (!parent || !header || !content) return;

    const syncScroll = () => {
      const scrollLeft = parent.scrollLeft;
      header.scrollLeft = scrollLeft;
      content.scrollLeft = scrollLeft;
    };

    parent.addEventListener("scroll", syncScroll);
    return () => parent.removeEventListener("scroll", syncScroll);
  }, []);

  return (
    <div
      ref={parentRef}
      className="overflow-x-auto scroll-smooth snap-x snap-mandatory space-y-4"
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="flex gap-4 min-w-max bg-gray-100 p-4 sticky top-0"
      >
        {arr.map((n) => (
          <div
            key={n}
            className="w-64 h-10 bg-blue-200 flex items-center justify-center rounded-xl snap-start"
          >
            Header {n}
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="flex gap-4 min-w-max p-4 snap-x snap-mandatory scroll-smooth"
      >
        {arr.map((n) => (
          <section
            key={n}
            className="flex flex-col gap-2 bg-gray-200 rounded-xl p-4 w-64 snap-start"
          >
            <h3 className="font-semibold">Section {n}</h3>
            <div className="h-40 bg-white rounded-lg shadow-inner" />
          </section>
        ))}
      </div>
    </div>
  );
}

// Link : https://chatgpt.com/share/6901eb4a-8848-8010-90d7-f54307469990