import Image from 'next/image'

interface LogoProps {
  src?: string
  alt?: string
  width?: number
  height?: number
}

export const Logo: React.FC<LogoProps> = ({ 
  src = '/img/logo.png', 
  alt = 'logo', 
  width = 150, 
  height = 50 
}) => {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className="logo float-left" 
    />
  )
}
