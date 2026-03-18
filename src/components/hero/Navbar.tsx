import { useEffect, useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import ToggleTheme from "./ToggleTheme";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = (currentScrollY: number) => {
      // Ignore le scroll élastique (overscroll) d'iOS en haut
      if (currentScrollY < 0) return;

      setIsScrolled(currentScrollY > 50);

      // Si on remonte d'au moins 10px (tolérance), on affiche la navbar
      // Si on descend d'au moins 10px, on la cache.
      const diff = currentScrollY - lastScrollY;

      if (diff < -10 && currentScrollY > 50) {
        setIsScrollingUp(true);
        setLastScrollY(currentScrollY);
      } else if (diff > 10) {
        setIsScrollingUp(false);
        setLastScrollY(currentScrollY);
      }
    };

    const handleWindowScroll = () => handleScrollEvent(window.scrollY);
    
    const handleModalScroll = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      handleScrollEvent(customEvent.detail);
    };

    const handleModalState = (e: Event) => {
      const isOpen = (e as CustomEvent<boolean>).detail;
      setIsModalOpen(isOpen);
      if (isOpen) {
        setIsScrollingUp(false);
        setLastScrollY(0);
      } else {
        setLastScrollY(window.scrollY);
        setIsScrolled(window.scrollY > 50);
        setIsScrollingUp(false);
      }
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    window.addEventListener("modalScroll", handleModalScroll as EventListener);
    window.addEventListener("modalState", handleModalState as EventListener);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("modalScroll", handleModalScroll as EventListener);
      window.removeEventListener("modalState", handleModalState as EventListener);
    };
  }, [lastScrollY]);

  // La navbar est visible si on est en haut de page (et hors modale), si on la survole (desktop),
  // OU si on scroll significativement vers le haut (mobile/desktop smooth experience)
  const isVisible = (!isScrolled && !isModalOpen) || isHovered || isScrollingUp;

  return (
    <>
      {/* Zone invisible pour détecter le hover tout en haut de l'écran (Desktop) */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[250px] h-[calc(4rem+env(safe-area-inset-top))] z-[120]"
        onPointerEnter={(e) => e.pointerType === 'mouse' && setIsHovered(true)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setIsHovered(false)}
      />

      {/* Petit indicateur visuel (ligne verte) qui s'affiche quand la navbar est cachée */}
      <div
        className={`
          fixed top-[env(safe-area-inset-top)] left-1/2 -translate-x-1/2 w-16 h-1 
          bg-green-400/50 rounded-b-md shadow-[0_0_10px_rgba(74,222,128,0.5)]
          transition-all duration-500 z-[120] pointer-events-none
          ${isVisible ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}
        `}
      />

      {/* Navbar Container */}
      <div
        className={`
          fixed top-[calc(1rem+env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-[120] flex items-center justify-center gap-3 
          px-4 py-2.5 rounded-full bg-[#111]/70 backdrop-blur-md border border-[#333]/50 
          shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-24 opacity-0 scale-95 pointer-events-none'}
        `}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setIsHovered(true)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setIsHovered(false)}
      >
        {/* On force une classe spéciale via la prop formNav pour le texte TOUJOURS blanc */}
        <LanguageSwitcher fromNav={true} />
        <div className="w-px h-4 bg-[#333]" />
        <ToggleTheme />
      </div>
    </>
  );
}
