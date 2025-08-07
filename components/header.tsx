'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, User, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import ModeToggle from "@/components/mode-toggle"
import { useSession, signOut } from 'next-auth/react'

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const { data: session, status } = useSession()
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                {status === 'loading' ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                                        <span className="text-sm text-gray-500">Loading...</span>
                                    </div>
                                ) : session ? (
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 text-sm">
                                            <User className="w-4 h-4" />
                                            <span className="hidden sm:inline">{session.user?.name || session.user?.email}</span>
                                        </div>
                                        <Button
                                            onClick={() => signOut()}
                                            variant="outline"
                                            size="sm">
                                            <LogOut className="w-4 h-4 mr-2" />
                                            <span>Sign Out</span>
                                        </Button>
                                        <ModeToggle />
                                    </div>
                                ) : (
                                    <>
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm">
                                            <Link href="/auth/signin">
                                                <span>Login</span>
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="sm">
                                            <Link href="/auth/signup">
                                                <span>Sign Up</span>
                                            </Link>
                                        </Button>
                                        <ModeToggle />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
