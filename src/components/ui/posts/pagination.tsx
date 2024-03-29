import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  currentPage: number;
  url: string;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages, url }: Props) {
  const router = useRouter();
  const getDisplayPages = () => {
    const start = currentPage - 4 < 1 ? 1 : currentPage - 4;
    const end = start + 9 > totalPages ? totalPages : start + 9;

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const increasePage = () => {
    if (currentPage < totalPages) {
      router.push(`${url}/${currentPage + 1}`);
    }
  };

  const decreasePage = () => {
    if (currentPage > 1) {
      router.push(`${url}/${currentPage - 1}`);
    }
  };

  const increasePageBy10 = () => {
    if (currentPage + 10 <= totalPages) {
      router.push(`${url}/${currentPage + 10}`);
    }
  };

  const decreasePageBy10 = () => {
    if (currentPage - 10 >= 1) {
      router.push(`${url}/${currentPage - 10}`);
    } else {
      router.push(`${url}/1`);
    }
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
            number === currentPage
              ? "text-white bg-whitebg-default rounded-full"
              : ""
          } text-body-medium w-9 h-9`}
          onClick={() => router.push(`${url}/${number}`)}
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
