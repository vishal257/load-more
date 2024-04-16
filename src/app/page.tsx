import SearchBar from "./components/SearchBar";
import localFont from "next/font/local";

const newFont = localFont(
  {
     src: "./mangueiraalt-alt.otf",
     variable: '--new-font'
    }
  );

export default function Entry() {
  return (
    <div className={`${newFont.variable} font-sans`}>
      <SearchBar />
    </div>
  );
}
