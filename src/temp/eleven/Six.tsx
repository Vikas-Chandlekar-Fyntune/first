import React from "react";

const Six = () => {
  return (
    <div className="flex gap-2">
      <aside className="h-screen sticky top-0 w-1/3">Sidebar</aside>

      <main className="flex-1">
        {[...Array(40)].map((_, i) => (
          <p key={i}>Main content {i + 1}</p>
        ))}
      </main>
    </div>
  );
};

export default Six;
