const higlightedCn = 'text-accent3 font-bold';

const config = [
  () => (
    <div>
      <span className={higlightedCn}>Friendly </span>atmosphere
    </div>
  ),
  () => (
    <div>
      <span className={higlightedCn}>International </span>level teaching
    </div>
  ),
  () => (
    <div>
      <span className={higlightedCn}>Structured </span>and fun group lessons
    </div>
  ),
  () => (
    <div>
      <span className={higlightedCn}>Detailed </span>and personalized private lessons
    </div>
  ),
  () => (
    <div>
      <span className={higlightedCn}>Quality </span>Practice nights
    </div>
  ),
  () => (
    <div>
      Community <span className={higlightedCn}>Parties & Events</span>
    </div>
  ),
  () => (
    <div>
      Well <span className={higlightedCn}>established </span>school since 2016
    </div>
  ),
] as const;

export default config;
