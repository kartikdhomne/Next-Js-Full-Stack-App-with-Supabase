export default function Footer({ font }: { font : string }) {
  return (
    <footer className="py-12 bg-gray-952 text-gray-953">
      <div
        className={`max-w-[100rem] px-12 mx-auto flex justify-between ${font}`}
      >
        <p className="text-xl">All Rights Reserved 2024 © Kartik Dhomne Inc.</p>
      </div>
    </footer>
  );
}
