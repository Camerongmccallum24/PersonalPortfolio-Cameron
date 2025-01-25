import { IframeDemo } from "@/components/ui/iframe-demo";

export default function Demo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Demo Showcase</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Project Demo</h2>
          <IframeDemo
            url="https://example.com"
            title="Project Demo"
            defaultHeight={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
