import React from 'react'

export function Button1({ onClick, children, disabled }) {
    return (
        <>
            <button
                className="w-fit px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#FE6D73] rounded-md hover:bg-[#17C3B2]"
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}

export function Button2({ onClick, children, disabled }) {
    return (
        <>
            <button
                className="flex items-center justify-center w-fit p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 hover:border-[#17C3B2] hover:text-[#17C3B2]"
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}

export function Button3({ onClick, children, disabled }) {
    return (
        <>
            <button
                className="flex items-center justify-center w-fit p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 hover:border-[#ffcb77] hover:text-[#ffcb77]"
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}

