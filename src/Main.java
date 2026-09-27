import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter star radius: ");
        double starRadius = scanner.nextDouble();

        System.out.print("Enter planet radius: ");
        double planetRadius = scanner.nextDouble();

        if (starRadius <= 0 || planetRadius <= 0) {
            System.out.println("Radii must be greater than zero.");
            scanner.close();
            return;
        }

        double maxBrightnessDrop =
                (planetRadius * planetRadius) / (starRadius * starRadius);

        double minimumBrightness = 1.0;

        StringBuilder csv = new StringBuilder();
        csv.append("time,position,brightness\n");

        for (int time = 0; time <= 20; time++) {
            double position = time - 10;
            double distanceFromCenter = Math.abs(position);
            double brightness = 1.0;

            if (distanceFromCenter <= 3) {
                double transitAmount =
                        Math.sqrt(1 - Math.pow(distanceFromCenter / 3, 2));

                brightness = 1.0 - maxBrightnessDrop * transitAmount;
            }

            if (brightness < minimumBrightness) {
                minimumBrightness = brightness;
            }

            csv.append(time)
                    .append(",")
                    .append(position)
                    .append(",")
                    .append(brightness)
                    .append("\n");
        }

        Path outputFile = Path.of("light-curve.csv");
        Files.writeString(outputFile, csv.toString());

        double observedTransitDepth = 1.0 - minimumBrightness;
        double estimatedPlanetRadius =
                TransitAnalyzer.estimatePlanetRadius(
                        observedTransitDepth,
                        starRadius
                );

        System.out.printf("%nMinimum brightness: %.4f%n", minimumBrightness);
        System.out.printf("Observed transit depth: %.4f%n", observedTransitDepth);
        System.out.printf("Estimated planet radius: %.4f%n", estimatedPlanetRadius);
        System.out.println("Light curve saved to: " + outputFile.toAbsolutePath());

        scanner.close();
    }
}