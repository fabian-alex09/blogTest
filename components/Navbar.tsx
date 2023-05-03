import Link from "next/link";

//Creates Bar and Links
//Use flex to horizontally list items, instead of vertically
export default function Navbar() {
    return (
        <div className="bg-gray-800">
            <nav className="container py-4 mx-auto">
                <ul className="flex space-x-6 text-lg justify-center">
                <li>
                    <NavLink href="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink href="/blog">BLOG</NavLink>
                </li>
                <li>
                    <NavLink href="https://github.com/fabian-alex09/blogTest">
                    GITHUB
                    </NavLink>
                </li>
                </ul>
            </nav>
        </div>
    )
}

//Creates NavLink type that includes both link and customizable actions (ex. hover)
type NavLink = {
    href: string;
    children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLink) => {
    return (
      <Link className="hover:text-amber-200 hover:underline" href={href}>
        {children}
      </Link>
    );
};
  