initial_red_kerzen = 200 * 0.99
print('initial red kerzen = ', initial_red_kerzen)

# final_red_kerzen = 0.98 * (200-(initial_red_kerzen - final_red_kerzen))
final_red_kerzen = 0.98 * (200 - initial_red_kerzen) / 0.02

total_kerzen_left = final_red_kerzen / 0.98

print('final red kerzen = ', final_red_kerzen)
print('removed red kerzen = ', initial_red_kerzen-final_red_kerzen)
print('total kerzen left = ', total_kerzen_left)