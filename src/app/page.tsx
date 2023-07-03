import { colors } from "@/styles/color-guide";
import Link from "next/link";
//색상 보여주는 페이지
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div>
        <h1 className="font-h1 text-h1">Heading 1</h1>
        <h2 className="font-h2 text-h2">Heading 2</h2>
        <h3 className="font-h3 text-h3">Heading 3</h3>
        <h4 className="font-h4 text-h4">Heading 4</h4>
        <p className="font-body-large text-body-large">Body Large</p>
        <p className="font-body-medium text-body-medium">Body Medium</p>
        <p className="font-body-small text-body-small">Body Small</p>
      </div>
      <div>
        <h1>WhiteBg</h1>
        {Object.entries(colors.whitebg).map(([name, color]) => (
          <ColorSample key={name} name={name} color={color} />
        ))}
        <h1>BlackBg</h1>
        {Object.entries(colors.blackbg).map(([name, color]) => (
          <ColorSample key={name} name={name} color={color} />
        ))}
      </div>

      <div>
        <Link href={"/login"} className="text-blue-900">
          로그인 페이지로 가기
        </Link>
      </div>
    </main>
  );
}

const ColorSample = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className="flex items-center my-4">
      <div
        className="w-12 h-12 mr-4 rounded-lg"
        style={{ background: color }}
      ></div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-gray-500">{color}</div>
      </div>
    </div>
  );
};
