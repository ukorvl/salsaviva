const {CONTACT_PHONE, WHATSAPP_ADDRESS} = process.env;

/**
 * @returns React component.
 */
export default function Footer() {
  return (
    <footer className="flex justify-around container">
      <div>
        <a href={WHATSAPP_ADDRESS}>{CONTACT_PHONE}</a>
      </div>
    </footer>
  );
}
