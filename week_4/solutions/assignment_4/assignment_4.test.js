describe("calculateBMI", () => {
    it("should return the correct BMI for valid inputs", () => {
        expect(calculateBMI(1.75, 70)).toBeCloseTo(22.86, 2);
    });

    it("should throw an error for height <= 0", () => {
        expect(() => calculateBMI(0, 70)).toThrow("Height must be greater than zero");
    });

    it("should handle edge cases gracefully", () => {
        expect(() => calculateBMI(-1.8, 70)).toThrow("Height must be greater than zero");
    });
});
