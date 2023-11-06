'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import classnames from 'classnames'

const Navbar = () => {
    const correctPath = usePathname();

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'issues', href: '/issues'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-16 items-center'>
        <Link href="/"><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            {links.map(link =>
                <Link key={link.href}
                    className={classnames({
                        //`${link.href=== correctPath ? 'text-zinc-800': 'text-zinc-500'} hover:text-zinc-800 transition-colors`}
                        'text-zinc-900': link.href === correctPath,
                        'text-zinc-500': link.href !== correctPath,
                        'hover:text-zinc-800 transition-colors': true
                        })}
                        href={link.href}>{link.label}
                </Link>)
            }

        </ul>
    </nav>
  )
}

export default Navbar
