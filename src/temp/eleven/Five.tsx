export default function Four() {
  return (
    <div className="@container">
      <div
        className="
          grid gap-3 p-4 border border-gray-300 rounded-lg
          [grid-template-areas:'media''title''content''actions''footer']

          @max-[600px]:bg-green-500
          @max-[600px]:[grid-template-areas:
            'image'
            'title'
            'btn1'
            'btn2'
            'checkbox'
            'content'
            'footer'
          ]
        "
      >
        {/* Media */}
        <div
          className="
            flex justify-between items-center
            [grid-area:media]
            @max-[600px]:contents
          "
        >
          <img
            src="https://static.toiimg.com/photo/imgsize-23456,msid-126555987/nobel-medal.jpg"
            alt="img"
            className="
              w-24
              @max-[600px]:[grid-area:image]
            "
          />

          <input
            type="checkbox"
            className="@max-[600px]:[grid-area:checkbox]"
          />
        </div>

        <h3 className="[grid-area:title] text-lg font-semibold">Card Title</h3>

        <p className="[grid-area:content] text-sm text-gray-700">
          This is card content. It adapts using container queries.
        </p>

        {/* Actions */}
        <div
          className="
            flex gap-3
            [grid-area:actions]
            @max-[600px]:contents
          "
        >
          <button
            className="
              px-3 py-1 border rounded
              @max-[600px]:[grid-area:btn1]
            "
          >
            Accept
          </button>

          <button
            className="
              px-3 py-1 border rounded
              @max-[600px]:[grid-area:btn2]
            "
          >
            Reject
          </button>
        </div>

        <div className="[grid-area:footer] text-xs text-gray-600">
          Footer info
        </div>
      </div>
    </div>
  );
}
