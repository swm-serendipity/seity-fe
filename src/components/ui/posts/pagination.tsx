import Image from "next/image";
import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const maxPage = 100; // 예시로 100페이지까지 있다고 가정

  const getDisplayPages = () => {
    const start = page - 4 < 1 ? 1 : page - 4;
    const end = start + 9 > maxPage ? maxPage : start + 9;

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const increasePage = () => {
    if (page < maxPage) setPage((prev) => prev + 1);
  };

  const decreasePage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const increasePageBy10 = () => {
    if (page + 10 <= maxPage) setPage((prev) => prev + 10);
  };

  const decreasePageBy10 = () => {
    if (page - 10 >= 1) setPage((prev) => prev - 10);
    else setPage(1);
  };

  const pages = getDisplayPages();

  return (
    <div className="flex w-full justify-center space-x-2 mb-10">
      <button onClick={decreasePageBy10}>
        <Image
          src="/posts/pagination-double-left.png"
          width={36}
          height={36}
          alt="10페이지 앞으로"
        />
      </button>
      <button onClick={decreasePage}>
        <Image
          src="/posts/pagination-left.png"
          width={36}
          height={36}
          alt="1페이지 앞으로"
        />
      </button>

      {pages.map((number) => (
        <button
          key={number}
          className={`${
            number === page ? "text-white bg-whitebg-default rounded-full" : ""
          } text-body-medium w-9 h-9`}
          onClick={() => setPage(number)}
        >
          {number}
        </button>
      ))}

      <button onClick={increasePage}>
        <Image
          src="/posts/pagination-right.png"
          width={36}
          height={36}
          alt="1페이지 뒤로"
        />
      </button>
      <button onClick={increasePageBy10}>
        <Image
          src="/posts/pagination-double-right.png"
          width={36}
          height={36}
          alt="10페이지 뒤로"
        />
      </button>
    </div>
  );
}
