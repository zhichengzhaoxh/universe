public class TransitAnalyzer {
    public static double estimatePlanetRadius(double transitDepth, double starRadius) {
        return starRadius * Math.sqrt(transitDepth);
    }
}