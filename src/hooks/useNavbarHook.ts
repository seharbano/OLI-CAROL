import { useState, useRef, useEffect } from "react";

export function useNavbarHooks() {
  // Search state
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dropdown state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    // Search
    isSearching,
    setIsSearching,
    query,
    setQuery,

    // Menu
    isMenuOpen,
    setIsMenuOpen,

    // Dropdown
    openDropdown,
    handleMouseEnter,
    handleMouseLeave,
  };
}
